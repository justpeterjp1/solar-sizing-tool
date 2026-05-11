import { motion } from "framer-motion";

export function StatCard({ label, value, unit, icon: IconComponent, iconColor = '#FFC300', results }) {
  return (
    <motion.div
          key={results.energy}
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
     className="  p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-gray-900">{value}</span>
            {unit && <span className="text-lg text-gray-600">{unit}</span>}
          </div>
        </div>
        <div className="p-2.5 rounded-lg" style={{ backgroundColor: `${iconColor}20` }}>
          {IconComponent ? (
            <IconComponent className="w-6 h-6" style={{ color: iconColor }} />
          ) : (
            <span className="w-6 h-6 block" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
