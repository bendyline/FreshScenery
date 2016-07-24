/// <reference path="Product.ts" />

namespace FreshScenery
{
    export class Region
    {
        private m_id : String;
        private m_name : String;
        private m_products : Array<FreshScenery.Product>;

        get id() : String
        {
            return this.m_id;
        }

        get name() : String
        {
            return this.m_name;
        }

        set name(newName : String)
        {
            this.m_name = newName;
        }

        get products() : Array<FreshScenery.Product>
        {
            return this.m_products;        
        }

        public load(r : Region)
        {
            this.m_id = r.id;
            this.m_name = r.name;
            this.m_products = new Array<FreshScenery.Product>();
            let count = 0;

            for (let i = 0; i< r.products.length; i++)
            {
                let prod = r.products[i];
	            let newProduct = new FreshScenery.Product();

                newProduct.load(prod);

                this.m_products[count] = newProduct;
                count++; 
    	    }
        }
    }
}