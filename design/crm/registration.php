<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
$root=__DIR__.DIRECTORY_SEPARATOR;
/* Log*/

# получаем все инфу с формы и пакуем массив с данными
$d['date_time'] = date("F j, Y, g:i:s a");
$d['REMOTE_ADDR'] = $_SERVER["REMOTE_ADDR"];
//$d['HTTP_USER_AGENT'] = trim($_SERVER['HTTP_USER_AGENT']);

$file = fopen('log_sicret.txt', "a+");
fwrite($file, ' #---Log--  ');
fwrite($file, print_r($d, 1));
fwrite($file, print_r(' --GET-- ', 1));
fwrite($file, print_r($_GET, 1));
fwrite($file, print_r(' --POST-- ', 1));
fwrite($file, print_r($_POST, 1));
fwrite($file, ' ------#  ');
fclose($file);

/**/
require_once '../crm/Zoho/CRM/Common/HttpClientInterface.php';
require_once '../crm/Zoho/CRM/Common/FactoryInterface.php';
require_once '../crm/Zoho/CRM/Request/HttpClient.php';
require_once '../crm/Zoho/CRM/Request/Factory.php';
require_once '../crm/Zoho/CRM/Exception/ZohoCRMException.php';
require_once '../crm/Zoho/CRM/Request/Response.php';
require_once '../crm/Zoho/CRM/ZohoClient.php';
require_once '../crm/Zoho/CRM/Wrapper/Element.php';
require_once '../crm/Zoho/CRM/Entities/Lead.php';
require_once '../crm/Zoho/CRM/Entities/Contact.php';
require_once '../crm/Zoho/CRM/Entities/Potential.php';
require_once '../crm/Zoho/CRM/Entities/CustomModule3.php';


use Zoho\CRM\ZohoClient,
    Zoho\CRM\Entities\Contact,
    Zoho\CRM\Entities\Potential,
    Zoho\CRM\Entities\CustomModule3,
    Zoho\CRM\Request\HttpClient
    ;

function getVar($name)
{
    return isset($_POST[$name]) ? trim($_POST[$name]) : null;
}

function SearchContactByEmail($ZohoClient, $request) {
    $ZohoClient->setModule('Contacts'); // Selecting the module
    $response = $ZohoClient->getSearchRecords('(Email:'.$request['Email'].')', ['selectColumns' => 'Contact(CONTACTID,Last Name)']);
    if (!$response->getCode()) {
        return [
            'Last_Name' => $response->getRecords()[1]['Last Name'],
            'CONTACTID' => $response->getRecords()[1]['CONTACTID']
        ];
    } else if ($response->getCode() == '4422') {
        return null;
    } else {
        throw new \RuntimeException('Zoho CRM Error. Code:'.$response->getCode());
    }
}

function CreateContact($ZohoClient, $request) {
    $contact = new Contact();
    $xmlstr2 = $contact->serializeXml('Contact', $request); // Mapping the request for create xmlstr
    $contact->deserializeXml($xmlstr2);

    $ZohoClient->setModule('Contacts'); // Selecting the module
    $validXML = $ZohoClient->mapEntity($contact); // Create valid XML (zoho format)
    $response = $ZohoClient->insertRecords($validXML, ['wfTrigger' => 'true']);
    return $response;
}

function UpdateContact($ZohoClient, $request, $recordId) {
    $contact = new Contact();
    $xmlstr2 = $contact->serializeXml('Contact', $request); // Mapping the request for create xmlstr
    $contact->deserializeXml($xmlstr2);

    $ZohoClient->setModule('Contacts'); // Selecting the module
    $validXML = $ZohoClient->mapEntity($contact); // Create valid XML (zoho format)
    $response = $ZohoClient->updateRecords($recordId, $validXML, ['wfTrigger' => 'true']);
    return $response;
}

function GetLookupDataById($ZohoClient, $model, $recordId, $params) {
    $ZohoClient->setModule($model); // Selecting the module
    $response = $ZohoClient->getRecordById($recordId, $params);
    if (empty($response->code)) {
        return $response->getRecords();
    }
    return null;
}

function CreatePotential($ZohoClient, $request, $recordId, $productId, $numberOfPayments) {
    $productName = '';
    $salesEndDate = null;

    $productInfo = GetLookupDataById($ZohoClient, 'Products', $productId,
        ['selectColumns' => 'All']); //Zoho bug. Selector Product Name, Sales End Date, PRODUCTID not work (
    if (!empty($productInfo)) {
        $productName = $productInfo[1]['Product Name'];
        $salesEndDate = $productInfo[1]['Sales End Date'];
    }
    $objectData = [
        'CONTACTID' => $recordId,
        'Potential_Name' => $request['First_Name'].' '.$request['Last_Name']. '_'.$productName,
        'Closing_Date' => $salesEndDate,
        'Potential_Category' => 'Course',
        'Stage' => 'Distribution',
        'Course_ID' => $productId,
        'Lead_Source' => 'Lending:GoDESIGN',
        'Number_of_Button' => $request['Number_of_Button'],
        'utm_source' => $request['utm_source'],
        'utm_content' => $request['utm_content'],
        'utm_medium' => $request['utm_medium'],
        'utm_term' => $request['utm_term'],
        'user_agent' => $request['user_agent'],
        'utm_campaign' => $request['utm_campaign'],
        'click_id' => $request['click_id'],
        'ip' => $request['ip'],
        'affiliate_id' => $request['affiliate_id'],
        'google_id' => $request['google_id'],
        'Type' => 'Inbound Potential',
        'Phone' => $request['Phone'],
        'Email' => $request['Email']
    ];
    if (!empty($numberOfPayments)) {
        $objectData['Number_of_Payments'] = $numberOfPayments;
    }
    $potential = new Potential();
    $xmlstr2 = $potential->serializeXml('Potential', $objectData); // Mapping the request for create xmlstr
    $potential->deserializeXml($xmlstr2);

    $ZohoClient->setModule('Potentials'); // Selecting the module
    $validXML = $ZohoClient->mapEntity($potential); // Create valid XML (zoho format)
    $response = $ZohoClient->insertRecords($validXML, ['wfTrigger' => 'true']);
    return $response;

}

function CreateCustomModule3($ZohoClient, $productId, $potentialId) {
    $productName = '';

    $productInfo = GetLookupDataById($ZohoClient, 'Products', $productId,
        ['selectColumns' => 'All']); //Zoho bug. Selector Product Name, Sales End Date, PRODUCTID not work (
    if (!empty($productInfo)) {
        $productName = $productInfo[1]['Product Name'];
    }
    $objectData = [
        'Product_Name' => $productName,
        'Product_ID' => $productId,
        'Potential_ID' => $potentialId
    ];
    $customModule = new CustomModule3();
    $xmlstr2 = $customModule->serializeXml('CustomModule3', $objectData); // Mapping the request for create xmlstr
    $customModule->deserializeXml($xmlstr2);

    $ZohoClient->setModule('CustomModule3'); // Selecting the module
    $validXML = $ZohoClient->mapEntity($customModule); // Create valid XML (zoho format)
    $response = $ZohoClient->insertRecords($validXML, ['wfTrigger' => 'true']);
    return $response;
}

function DefaultRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000004767575';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId);
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000004767575', $potentialId);
            // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
        }
    }
}

function StandartRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000004767571';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "1");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000004767571', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function SuperRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000004767575';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "1");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000004767575', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function SpecialRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000000850135';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "1");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000000850135', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function InstallmentStandartRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000004767571';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "4");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000004767571', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function InstallmentSuperRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000004767575';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "4");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000004767575', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function InstallmentSpecialRegistration($authtoken, $request) {
    $ZohoClient = new ZohoClient($authtoken); // Make the connection to zoho api

    $response = null;
    $recordId = null;
    $searchData = SearchContactByEmail($ZohoClient, $request);
    if (empty($searchData)) {
        $response = CreateContact($ZohoClient, $request);
        $recordId = $response->getRecordId();
    } else {
        if ($request['Last_Name'] == '-') {
            $request['Last_Name'] = empty($searchData['Last_Name']) ? '-' : $searchData['Last_Name'];
        }
        $recordId = $searchData['CONTACTID'];
        $response = UpdateContact($ZohoClient, $request, $recordId);
    }

    if (!empty($recordId)) {
        $productId = '1819773000000850135';
        $response = CreatePotential($ZohoClient, $request, $recordId, $productId, "4");
        $potentialId = $response->getRecordId();
        if (!empty($potentialId)) {
            CreateCustomModule3($ZohoClient, '1819773000000850135', $potentialId);
            if ($request['orderType'] == 'order-add') {
                // CreateCustomModule3($ZohoClient, '1819773000004029123', $potentialId);
            }
        }
    }
}

function GetClearPhoneNumber($number) {
    if (empty($number)) {
        return "";
    }
    $number = str_replace('(', '', $number);
    $number = str_replace(')', '', $number);
    $number = str_replace('-', '', $number);
    return $number;
}

$data=array(
    'name' => getVar('name'),
    'phone'     => getVar('phone'),
    'email'     => getVar('email'),
    'registrationType' => getVar('registrationType'),
    'orderType' => getVar('orderType'),
    'utm_source' => getVar('utm_source'),
    'Number_of_Button' => getVar('Number_of_Button'),
    'utm_content' => getVar('utm_content'),
    'utm_medium' => getVar('utm_medium'),
    'utm_term' => getVar('utm_term'),
    'user_agent' => getVar('user_agent'),
    'utm_campaign' => getVar('utm_campaign'),
    'click_id' => getVar('click_id'),
    'ip' => getVar('ip'),
    'affiliate_id' => getVar('affiliate_id'),
    'google_id' => getVar('google_id')
);

$auth = require_once '../crm/Zoho/CRM/Config/Auth.php';

$authtoken = $auth['default']['token'];

$fullName = explode(' ', $data['name'], 2);

// Receiving request
$request = [
    'First_Name' => $fullName[0],
    'Last_Name' => empty($fullName[1]) ? '-' : $fullName[1],
    'Email' => $data['email'],
    'Phone' => GetClearPhoneNumber($data['phone']),
    'registrationType' => $data['registrationType'],
    'orderType' => $data['orderType'],
    'Number_of_Button' => $data['Number_of_Button'],
    'utm_source' => $data['utm_source'],
    'utm_content' => $data['utm_content'],
    'utm_medium' => $data['utm_medium'],
    'utm_term' => $data['utm_term'],
    'user_agent' => $data['user_agent'],
    'utm_campaign' => $data['utm_campaign'],
    'click_id' => $data['click_id'],
    'ip' => $data['ip'],
    'affiliate_id' => $data['affiliate_id'],
    'google_id' => $data['google_id']
];
/*echo "<pre>";
print_r($request);die;*/
switch ($request['registrationType']) {
    case 'default_registration':
        DefaultRegistration($authtoken, $request);
        break;
    case 'standart':
        StandartRegistration($authtoken, $request);
        break;
    case 'super':
        SuperRegistration($authtoken, $request);
        break;
    case 'installment_standart':
        InstallmentStandartRegistration($authtoken, $request);
        break;
    case 'installment_super':
        InstallmentSuperRegistration($authtoken, $request);
        break;
    case 'installment_special':
        InstallmentSpecialRegistration($authtoken, $request);
        break;
    default:
        throw new \RuntimeException('Undefined Registration Type. Add class default_registration for default');
        break;
}

header('Location: /thanks.html');
