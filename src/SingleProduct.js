import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SingleProduct() {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store);
  let { id } = useParams();
  const product = products.filter((product) => {
    return product.id === id;
  });
  if (!product[0]) {
    return navigate('/zdvd/dzv', { replace: true });
  }

  const { name, desc, price, url } = product[0];

  return (
    <main className="mx-auto my-[5rem] w-[90%]">
      <h1 className="font-extrabold text-4xl mb-[2rem] text-slate-800">
        {name}
      </h1>
      <section className="sm:grid sm:grid-cols-[1fr_1fr] sm:gap-[3rem]">
        <article className="">
          <img
            src={url}
            alt="img"
            className="rounded-lg w-full object-cover max-h-[20rem]"
          />
        </article>
        <article className="">
          <p className="mt-[3rem] sm:mt-0 font-extrabold text-slate-700 text-[15px] sm:text-[20px]">
            {name}
          </p>
          <p className="mt-[2rem] text-sky-500">${price}</p>
          <p className="mt-[em] text-slate-600 text-sm">{desc}</p>
        </article>
      </section>
    </main>
  );
}

export default SingleProduct;
