import { Wrapper } from "@/components/Wrapper/Wrapper";
import { CarsGrid } from "@/components/CarsGrid/CarsGrid";
import { CarCard } from "@/components/CarCard/CarCard";
import { allCars } from "@/data/data";

export const Cars = () => {
  const cardsList = allCars.map(({ id, images, ...rest }) => (
    <CarCard key={id} carId={id} imgUrl={images[0]} {...rest} />
  ));

  return (
    <>
      <aside></aside>
      <div>
        <Wrapper>
          <section>
            <CarsGrid cardsList={cardsList} />
          </section>
        </Wrapper>
      </div>
    </>
  );
};
