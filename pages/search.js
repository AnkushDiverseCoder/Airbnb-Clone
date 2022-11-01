import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formatedStartDate = format(new Date(startDate), 'dd MMMM yyyy')
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yyyy') 
  const range = `${formatedStartDate} - ${formatedEndDate}`

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} -  for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filter</p>
          </div>
          <div className="flex flex-col ">
          {
            searchResult.map(({img , location , title , description , star , price , total})=>(
              <div key={img}>
                <InfoCard  img={img} location={location} title={title} description={description} star={star} price={price} total={total}/>
              </div>
            ))
          }
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context){
      const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res =>res.json());
      return {
        props:{
          searchResult,
        }
      }
}
