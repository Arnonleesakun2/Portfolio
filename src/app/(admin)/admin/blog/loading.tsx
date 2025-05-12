const loading = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-2">
        <div className="skeleton h-10 w-64 bg-base-300 rounded-lg" />
        <div className="skeleton h-10 w-32 bg-base-300 rounded-lg" />
      </div>
      <div className="skeleton rounded-4xl w-full h-[300px] mt-4">
      
      </div>
    </div>
  )
}
export default loading