import HeaderMain from "@/components/Header/Header-main"
import Table from "@/components/Table"


export default function Main() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <HeaderMain />
            <div className="w-full h-96 flex justify-center items-center">
                <Table />
            </div>
        </div>
    )
}