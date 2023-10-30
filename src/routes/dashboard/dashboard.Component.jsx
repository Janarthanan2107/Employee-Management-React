import { imageData } from "../../constant";

const Dashboard = () => {
  return (
    <div className="h-[calc(100vh-8rem)] px-5">
      <h1 className="text-[2rem] font-bold text-center text-zinc-600">
        Employee Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        "In our innovative project, we have crafted a dynamic and user-friendly
        dashboard that empowers you to effortlessly manage your workforce.
        Seamlessly add and view employee profiles, including their names, roles,
        gender, and years of experience. With the power of real-time updates,
        you can conveniently access individual employee details and stay
        organized. Our responsive and intuitive design ensures an engaging and
        efficient user experience. Experience the future of workforce management
        in one click - your all-in-one solution for streamlined HR operations!"
      </p>
      <div className="mt-4">
        <p>Web page flow:</p>
        <div className="flex gap-5">
          {imageData.map((item) => {
            const { id, img, imgInfo } = item;
            return (
              <span className="w-[300px] object-cover shadow-md rounded-lg" key={id}>
                <img src={img} alt="form" />
                <p className="text-[14px] text-center px-2 mt-3">
                  {imgInfo}
                </p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
