import { userData } from "../api/userData";

const Profile = async () => {
  const user = await userData();

  return (
    <div>
      <h2>user : {user.length}</h2>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {user.map((user) => (
              <div className='p-4 md:w-1/3' key={user.name}>
                {/* <Click/> */}
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/> */}
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      CATEGORY
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      {user.name}{" "}
                    </h1>
                    <p className='leading-relaxed mb-3'>{user.email} </p>
                    <div className='flex items-center flex-wrap '>
                      <a href="" className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0'>
                        Number: {user.number}{" "}
                      </a>
                      <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                        Age:
                      </span>
                      <span className='text-gray-400 inline-flex items-center leading-none text-md'>
                        {user.age}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
