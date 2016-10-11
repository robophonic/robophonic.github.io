<?php namespace Zoho\CRM\Entities;

use Zoho\CRM\Wrapper\Element;

/**
 * Entity for leads inside Zoho
 * This class only have default parameters
 *
 * @package Zoho\CRM\Entities
 * @version 1.0.0
 */
class CustomModule3 extends Element
{
    public $Product_Name;
    public $Product_ID;
    public $Potential_ID;

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