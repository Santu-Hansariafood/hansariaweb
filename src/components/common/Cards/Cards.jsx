'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProfileCard = ({ image, name, designation, social }) => {
  return (
    <div className="w-[450px] h-[300px] bg-white shadow-lg rounded-lg overflow-hidden relative group">
      <div className="relative w-full h-[70%]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-green-500"><FaFacebook /></a>}
          {social.instagram && <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-pink-500"><FaInstagram /></a>}
          {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-green-400"><FaTwitter /></a>}
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-green-700"><FaLinkedin /></a>}
        </div>
      </div>
      <div className="h-[30%] flex flex-col justify-center items-center p-4 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  social: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default ProfileCard;