using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SampleWebLogProvider.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SampleWebLogProvider.DataAccess.Concrete
{
    internal class LogRepository : ILogRepository
    {
        private readonly IDbContextFactory<LogDbContext> _logDbContextFactory;

        public LogRepository(IDbContextFactory<LogDbContext> logDbContextFactory)
        {
            _logDbContextFactory = logDbContextFactory;
        }

        public bool Create(Log log)
        {
            try
            {
                LogDbContext dbContext = _logDbContextFactory.CreateDbContext();
                EntityEntry<Log> trackedLog = dbContext.Logs.Add(log);
                int result = dbContext.SaveChanges();

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
                LogDbContext dbContext = _logDbContextFactory.CreateDbContext();
                Log foundLog = dbContext.Logs.SingleOrDefault(l => l.Id == log.Id);
                if (foundLog == null)
                    return null;

                foundLog.IssueCreated = log.IssueCreated;
                foundLog.LogLevel = log.LogLevel;
                foundLog.Message = log.Message;

                EntityEntry<Log> trackedLog = dbContext.Logs.Update(foundLog);
                int result = dbContext.SaveChanges();

                return result == 1 ? trackedLog.Entity : null;

            } catch
            {
                return null;
            }            
        }

        public IEnumerable<Log> GetAll()
        {
            LogDbContext dbContext = _logDbContextFactory.CreateDbContext();
            return dbContext.Logs.ToList();
        }
    }
}
