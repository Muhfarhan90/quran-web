
type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};

function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex justify-center">
      <div className="h-[224px] bg-[url(./assets/HeroBackground.png)] bg-no-repeat bg-cover w-full rounded-bl-3xl rounded-br-3xl ">
        <div className="flex justify-between items-center px-5 pt-8 h-auto">
          <div className="flex flex-col text-left">
            <p className="text-sm text-white/60">Good {greeting}</p>
            <p className="text-md font-bold text-white">{name} 🖐️</p>
          </div>
          <img src={avatar} alt="avatar user" className="size-12" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
