namespace FreshScenery
{
    export class Product
    {
        private m_id : String;
        private m_name : String;

        get id() : String
        {
            return this.m_id;
        }

        get name() : String
        {
            return this.m_name;
        }

        public load(p : Product)
        {
            this.m_id = p.id;
            this.m_name = p.name;
        }
    }
}