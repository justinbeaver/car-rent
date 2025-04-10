import { useSearchParams } from "react-router-dom";

import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Spacer } from "@/components/Spacer/Spacer";
import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { Pagination } from "@/components/Pagination/Pagination";
import { useAllCarsQuery } from "@/hooks/useAllCarsQuery";

import { SearchFilters } from "./SearchFilters/SearchFilters";
import s from "./Cars.module.scss";

export const Cars = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const type = searchParams.getAll("type");
  const capacity = searchParams.getAll("capacity");

  const { data, isLoading, isError, error } = useAllCarsQuery({
    page,
    perPage: 3,
    type,
    capacity,
  });

  const { last, items: filteredCarsCount, data: cars } = data || {};

  const cardsList =
    cars?.map(({ id, images, ...rest }) => (
      <CarCard key={id} carId={id} imgUrl={images[0].url} {...rest} />
    )) || [];

  const generateLinkForPage = (page) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);

    return `?${newSearchParams.toString()}`;
  };

  return (
    <>
      <SearchFilters />
      <div>
        <Wrapper>
          {/* TODO: should be a separate section component */}
          <section>
            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {!isLoading && !isError && (
              <>
                <CarsGrid cardsList={cardsList} />
                <Spacer size="950" />
                <div className={s.footer}>
                  <Pagination
                    className={s.pagination}
                    current={page}
                    last={last}
                    generateLinkForPage={generateLinkForPage}
                  />
                  <p className={s["total-cars-count"]}>
                    {/* TODO: make a separate total cars component with api call */}
                    <span className="visually-hidden">Total cars: </span>
                    <span>{`${filteredCarsCount} Car`}</span>
                  </p>
                </div>
                <Spacer size="950" />
              </>
            )}
          </section>
        </Wrapper>
      </div>
    </>
  );
};
