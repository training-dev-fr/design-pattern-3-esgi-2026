<?php
    class AdaptaterMap extends IMap{
        private $externalMap;

        public function __construct(ExternalMap $externalMap){
            $this->externalMap = $externalMap;
        }

        public function getPosition($lat,$lon){
            $position = new stdClass();
            $position->lat = $lat;
            $position->lon = $lon;
            return $this->externalMap->getLocation($position);
        }

        public function searchByCity($city){

        }
    }