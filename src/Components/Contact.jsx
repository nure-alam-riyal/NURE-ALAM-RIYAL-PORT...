
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaPhone, FaTelegram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {

  emailjs.init({
    publicKey: 'XhXvfpO0oXdpZohRe',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  const handleComment = e => {
    e.preventDefault()
    const email = e.target.email.value
    const comment = e.target.comment.value
    const info = {
      email: email,
      comment: comment
    }
    emailjs.send('service_3dyfati', 'template_qdzlmyg', info).then(
      () => {
        toast.success('Thank you for your coment');
      },
      (error) => {
        toast('FAILED...', error);
      },
    );
    console.log(info)
  }
  return (
    <div className="hero   mb-14">
      <div className="hero-content w-11/12 max-w-none  justify-between flex-col lg:flex-row">
        {/* <Fade className="w-full" direction="up "> */}
        <div className=" w-full lg:w-1/2 bg-base-200 p-10 rounded-[16px] h-full md:clip-path-contact1  ">
          <h1 className="text-4xl text-center md:text-left font-bold ">NURE ALAM RIYAL</h1>
          <p className="flex gap-2 text-2xl items-center mt-4 ">          <FaMapMarkerAlt className="text-red-200" />Jahangirnagor University,<br />Dhaka, Bangladesh </p>
          <p className="flex gap-2 text-2xl items-center flex-wrap mt-4 "><MdOutlineEmail className="text-red-200"></MdOutlineEmail>nariyal1050@gmail.com</p>
          <p className="flex gap-2 text-2xl items-center mt-4 ">          <FaPhone className="text-red-200"></FaPhone>+8801617640464</p>
          <p className="flex gap-2 text-2xl items-center mt-4 ">          <FaWhatsapp className="text-red-200"></FaWhatsapp>+8801617640464</p>
          <p className="flex gap-2 text-2xl items-center mt-4 ">          <FaTelegram className="text-red-200"></FaTelegram>+8801617640464</p>
        </div>
        {/* </Fade>
         <Fade className="w-full" direction="down"> */}
        <div className="card  w-full lg:w-1/2 md:clip-path-contact2  bg-base-200   shrink-0 ">
          <form onSubmit={handleComment} className="card-body md:w-9/12 md:ml-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input border-none w-full input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <textarea name='comment' id="" cols="3" rows="3" placeholder="comment....." className="rounded-xl p-4" required></textarea>

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send me Email</button>
            </div>
          </form>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Contact;