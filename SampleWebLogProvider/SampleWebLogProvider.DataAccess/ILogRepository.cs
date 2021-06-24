using SampleWebLogProvider.DataAccess.Models;
using System;
using System.Collections.Generic;

namespace SampleWebLogProvider.DataAccess
{
    public interface ILogRepository
    {
        bool Create(Log log);

        IEnumerable<Log> GetAll();

        Log Update(Log log);
    }
}
