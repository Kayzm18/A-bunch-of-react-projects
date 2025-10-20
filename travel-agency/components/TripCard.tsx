import { Link, useLocation } from "react-router"

const TripCard = ({id, name, location, imageUrls, tags, price}:
    TripCardProps
) =>{

    const path = useLocation();
    return(
        <Link to={path.pathname === '/' || path.pathname.startsWith('/travel')
            ? `/travel/${id}` : `/trips/${id}`}
        className="trip-card">
           <img src={imageUrls} alt={name} />

           <article>
            <h2>{name}</h2>
            <figure>
                <img 
                   src="/assets/icons.location-mark.svg"
                   alt="location" className="size-4"
                />
                <figcaption>{location}</figcaption>
            </figure>
           </article>

           <div className="mt-5 pl-[18px] pr-3.5 pb-5">
                <ChipListComponent ></ChipListComponent>
           </div>
        </Link>
    )
}
export default TripCard