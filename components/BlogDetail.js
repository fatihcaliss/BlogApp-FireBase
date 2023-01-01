export default function BlogDetail({ children, avatar, username, description,title }) {
    return (
        <div className="bg-white p-8 border-b-2 rounded-lg m-2 shadow-lg ">
            <div className="flex items-center gap-2">
                <img src={avatar} className="w-10 rounded-full" />
                <h2 className="text-sm">{username}</h2>
            </div>
            <div className="py-4">
                <h3 className="font-bold italic underline">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
            {children}
        </div>
    );
}