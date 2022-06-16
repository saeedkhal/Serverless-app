import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';
function Products() {
  const store = useSelector((store) => store);
  const { products, loading } = store;
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <section className="m-auto w-11/12 my-16">
        {' '}
        <h4 className="text-5xl font-extrabold text-slate-600 mb-16">
          Airtable
        </h4>
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-8">
          {products.map(({ name, image, price, id }) => {
            return (
              <article key={id} className="mb-[20px]">
                <Link to={`/${id}`}>
                  <img
                    src={image[0].url}
                    className="w-full object-cover rounded-lg h-[18rem] lg:h-[12rem]"
                    alt="img"
                  />
                </Link>

                <div className="flex justify-between mt-3">
                  <p className="font-bold tracking-widest text-slate-600">
                    {name}
                  </p>
                  <p className="text-sky-500">${price}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Products;
