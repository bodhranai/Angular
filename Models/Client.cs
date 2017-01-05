using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RDA.Angular.Models
{
    public class Client
    {
        public int Id { get; set; }
        public DateTime DoB { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public Zone Zone { get; set; }
        public  RiskLevel RiskLevel { get; set; }

        public  Race Race { get; set; }
        public  Ethnicity Ethnicity { get; set; }
        public  EnglishFluency EnglishFluency { get; set; }
        public  HomeLanguage HomeLanguage { get; set; }
        public  Gender Gender { get; set; }
        
    }
}