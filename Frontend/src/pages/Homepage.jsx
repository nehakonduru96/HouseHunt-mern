import Carousel from './Carousel';
import '../styles/Homepage.css';

const Homepage = () => {
  const lobsterFontStyle = {
    fontFamily: 'Lobster, cursive',
  };

  return (
    <div className="homepage">
      <Carousel />
      <div className="intro-section text-center">
        <h1 className="intro-title" style={lobsterFontStyle}>
          Welcome to HouseHunt
        </h1>
        <p className="intro-text" style={lobsterFontStyle}>
          Discover your perfect home with HouseHunt. Our platform simplifies the house hunting and rental process, making it easy for you to find or list properties effortlessly.
        </p>
      </div>
      <div className="categories-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: 'https://images.unsplash.com/photo-1565953522043-baea26b83b7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww',
              alt: 'Apartments',
              title: 'Explore Apartments',
              description: 'View Details',
            },
            {
              src: 'https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fHww',
              alt: 'Villas',
              title: 'Luxurious Villas',
              description: 'View Details',
            },
            {
              src: 'https://images.unsplash.com/photo-1622908382850-34730895ccbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y290dGFnZXN8ZW58MHx8MHx8fDA%3D',
              alt: 'Cottages',
              title: 'Cottages',
              description: 'View Details',
            },
            {
              src: 'https://media.istockphoto.com/id/1223072133/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.jpg?s=1024x1024&w=is&k=20&c=tTo1WpYoZNWZEwYaSCHKp5QF2K12vEh0_y19BOO70sg=',
              alt: 'Townhouses',
              title: 'Townhouses',
              description: 'View Details',
            },
            {
              src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww',
              alt: 'Cabins',
              title: 'Cabins',
              description: 'View Details',
            },
            {
              src: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
              alt: 'Studios',
              title: 'Modern Studios',
              description: 'View Details',
            },
          ].map((card, index) => (
            <div key={index} className="category-card">
              <img src={card.src} alt={card.alt} className="category-image" />
              <div className="category-title">{card.title}</div>
              <div className="category-text">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark text-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl mb-6">About Us</h2>
            <p className="text-lg">
             HouseHunt is your smart companion for finding or renting homes with ease. From discovering dream houses to listing your property, we make the process simple, fast, and hassle-free.
            </p>
          </div>
          <div className="lg:w-1/3 text-center">
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <div className="space-y-4">
              <p><strong>Address:</strong>Karakamabadi Road, Tirupati – 517507, Andhra Pradesh, India</p>
              <p><strong>Phone:</strong> +91 9876543212</p>
              <p><strong>Email:</strong>hello@househunthomes.in</p>
            </div>
          </div>
          <div className="lg:w-1/3 text-center lg:text-right">
            <h2 className="text-3xl mb-6">Follow Us</h2>
            <div className="space-y-4">
              <p><strong>Facebook:</strong> hello@househunt</p>
              <p><strong>Twitter:</strong> hello@househunt</p>
              <p><strong>Instagram:</strong> hellocd frontend@househunt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
