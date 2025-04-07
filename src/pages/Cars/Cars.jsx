import { useState } from "react";

import { Wrapper } from "@/components/Wrapper/Wrapper";
import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { useAllCarsQuery } from "@/hooks/useAllCarsQuery";

export const Cars = () => {
  const [page] = useState(1);

  const { data, isLoading, isError, error } = useAllCarsQuery({
    page,
    perPage: 3,
  });

  const cardsList = data?.data.map(({ id, images, ...rest }) => (
    <CarCard key={id} carId={id} imgUrl={images[0].url} {...rest} />
  ));

  return (
    <>
      <aside></aside>
      <div>
        <Wrapper>
          <section>
            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {!isLoading && !isError && <CarsGrid cardsList={cardsList} />}
          </section>
        </Wrapper>
      </div>
    </>
  );
};
