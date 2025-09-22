import clsx from 'clsx'

const colorClasses = {
  blue: 'bg-blue-500 text-blue-600 bg-blue-50',
  green: 'bg-green-500 text-green-600 bg-green-50',
  emerald: 'bg-emerald-500 text-emerald-600 bg-emerald-50',
  orange: 'bg-orange-500 text-orange-600 bg-orange-50',
  red: 'bg-red-500 text-red-600 bg-red-50',
  purple: 'bg-purple-500 text-purple-600 bg-purple-50',
  indigo: 'bg-indigo-500 text-indigo-600 bg-indigo-50',
  yellow: 'bg-yellow-500 text-yellow-600 bg-yellow-50',
}

export default function DashboardCard({ title, value, subtitle, icon: Icon, color = 'blue' }) {
  const [bgColor, textColor, lightBgColor] = colorClasses[color].split(' ')

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        <div className={clsx('p-3 rounded-lg', lightBgColor)}>
          <Icon className={clsx('h-6 w-6', textColor)} />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}