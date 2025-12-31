export default function Notifications({message}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-2xl font-semibold mb-4">{message}</h3>
      <hr className="border border-gray-200"></hr>

      <div className="space-y-4">
        <div className="space-y-4 pt-4 pb-2">
          <Notification
            icon="👍"
            title="New Doctor Registered"
            message="Dr. John Smith has registered"
            actionText="Approve"
            onAction={() => alert("Approved")}
          />
          <hr className="border border-gray-200"></hr>
          <Notification
            icon="⚠️"
            title="Nurse Pending Approval"
            message="Approval pending for Nurse Mary"
            time="10 mins ago"
          />
          <hr className="border border-gray-200"></hr>
          <Notification
            icon="🚑"
            title="Ambulance Document Expiry"
            message="Ambulance MH12AB2345 document expiring soon"
            time="1 hr ago"
          />
          <hr className="border border-gray-200"></hr>
        </div>
          <h1 className="text-end cursor-pointer">View All</h1>
      </div>
    </div>
  );
}

function Notification({
  icon,
  title,
  message,
  time,
  actionText,
  onAction,
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      {/* Left */}
      <div className="flex items-start gap-3">
        <div className="text-xl">{icon}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </div>

      {/* Right */}
      {actionText ? (
        <button
          onClick={onAction}
          className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          {actionText}
        </button>
      ) : (
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {time}
        </span>
      )}
    </div>
  );
}

