using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RDA.Angular.Models;

namespace RDA.Angular.Controllers
{
    public class ClientController : ApiController
    {
        public IEnumerable<Client> Clients()
        {
            List<Client> clientList = new List<Client>();
            clientList.Add(new Client {Id=1,FirstName = "John", LastName = "Smith", Address = "Berkeley, CA"});
            clientList.Add(new Client {Id=2, FirstName = "Mary", LastName = "Robinson", Address = "SF, CA" });
            clientList.Add(new Client {Id=3,FirstName = "Peter", LastName = "Murphy", Address = "SF, CA" });

            return clientList.AsEnumerable();
        }

        // GET: api/Client
        public IEnumerable<Client> Get()
        {
            return Clients();
        }

        // GET: api/Client/5
        public IQueryable<Client> Get(int id)
        {
            IQueryable<Client> clients = Clients().AsQueryable();
            return clients.Where(a => a.Id == id);
        }

        // POST: api/Client
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Client/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Client/5
        public void Delete(int id)
        {
        }
    }
}
