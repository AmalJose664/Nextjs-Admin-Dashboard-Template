import Link from "next/link"

const Users = () => {
  return (
	<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
		<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
			<h1 className="text-4xl font-bold text-gray-800 mb-6">Users </h1>
			<p className="text-lg text-gray-600 mb-8">
				Manage your users here. You can view detailed information or browse a
				list of users.
			</p>


			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
				<Link href={'/dashboard/users/user-details'} className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold text-teal-800 mb-2">
						Users Details
					</h2>
					<p className="text-gray-600">View Detailed information about each user in your system</p>
				</Link>

				<Link href={'/dashboard/users/users-list'} className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
					<h2 className="text-xl font-semibold text-teal-800 mb-2">
						Users List 
					</h2>
					<p className="text-gray-600">View Detailed information about each user in your system</p>
				</Link>
			</div>
		</div>
	</div>
  )
}
export default Users