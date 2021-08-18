using System;

namespace RepositoryVsCQRS.Repository
{
    public interface IBaseRepository<T>
    {
        public T GetById(Guid id);
        public T Create(T user);
        public T Update(T user);
        public bool Delete(Guid id);
    }
}
