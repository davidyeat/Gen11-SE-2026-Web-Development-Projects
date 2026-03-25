const States = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-1 mt-10">
            <div className="text-2xl font-black">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    );
}

export default States;