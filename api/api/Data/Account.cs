using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data
{
    public class Account
    {
        public Account(string username, string password)
        {
            Username = username;
            Password = password;
        }

        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
