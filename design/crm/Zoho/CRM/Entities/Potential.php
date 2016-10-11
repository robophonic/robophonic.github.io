<?php namespace Zoho\CRM\Entities;

use Zoho\CRM\Wrapper\Element;

/**
 * Entity for leads inside Zoho
 * This class only have default parameters
 *
 * @package Zoho\CRM\Entities
 * @version 1.0.0
 */
class Potential extends Element
{
    public $CONTACTID;
    public $Potential_Name;
    public $Closing_Date;
    public $Potential_Category;
    public $Stage;
    public $Course_ID;
    public $Lead_Source;
    public $Number_of_Button;
    public $Number_of_Payments;
    public $utm_source;
    public $utm_content;
    public $utm_medium;
    public $utm_term;
    public $user_agent;
    public $utm_campaign;
    public $click_id;
    public $ip;
    public $affiliate_id;
    public $google_id;

    /**
     * Getter
     *
     * @return mixed
     */
    public function __get($property)
    {
        return isset($this->$property)?$this->$property :null;
    }

    /**
     * Setter
     *
     * @param string $property Name of the property to set the value
     * @param mixed $value Value for the property
     * @return mixed
     */
    public function __set($property, $value)
    {
        $this->$property = $value;
        return $this->$property;
    }
}