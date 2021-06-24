using Microsoft.EntityFrameworkCore.ChangeTracking;
using SampleWebLogProvider.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SampleWebLogProvider.DataAccess.Concrete
{
    public class LogRepository : ILogRepository
    {
        private readonly LogDbContext _logDbContext;

        public LogRepository(LogDbContext logDbContext)
        {
            _logDbContext = logDbContext;
        }

        public bool Create(Log log)
        {
            try
            {
                EntityEntry<Log> trackedLog = _logDbContext.Logs.Add(log);
                int result = _logDbContext.SaveChanges();

                return result == 1;
            } catch
            {
                return false;
            }
            
            throw new NotImplementedException();
        }

        public Log Update(Log log)
        {
            try
            {
                Log foundLog = _logDbContext.Logs.SingleOrDefault(l => l.Id == log.Id);
                if (foundLog == null)
                    return null;

                EntityEntry<Log> trackedLog = _logDbContext.Logs.Update(log);
                int result = _logDbContext.SaveChanges();

                return result == 1 ? trackedLog.Entity : null;

            } catch
            {
                return null;
            }            
        }

        public IEnumerable<Log> GetAll()
        {
            return _logDbContext.Logs.ToList();
        }
    }
}
