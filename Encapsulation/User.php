<?php
    class User{
        private $firstname;
        public lastname;
        public birthday;

        public function __construct(){

        }

        public function setFirstname($firstname){
            if(preg_match('/[A-Za-z -]{3,}',$firstname)){
                $user1->firstname = $firstname;
            }else{
                throw new Exception();
            }
        }

        getFullName(){
            return $this->firstName  . " " . $this->lastName;
        }
    }