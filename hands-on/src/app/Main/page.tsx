import HeaderMain from "@/components/Header/Header-main"
import Table from "@/components/Table"


export default function Main() {

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">

      <HeaderMain />
      <div className="w-full max-h-[365px] flex justify-center overflow-hidden overflow-y-scroll">
        <Table />
      </div>

    </div>
  )
}