<?php
    interface IMap{
        public function getPosition($lat,$lon);
        public function searchByCity($city);
    }