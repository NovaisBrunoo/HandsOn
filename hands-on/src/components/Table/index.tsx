import Image from "next/image"

import iconPencil from "@/assets/icon/pencil-svgrepo-com.svg"

import { data } from "@/utils/data"
import { formateCurrency } from "@/utils/func/formateCurrency"

export default function Table() {
  return (

    <table className="w-4/5 " >
      <thead >
        <tr className=" shadow-inner rounded-md shadow-gray-200" >
          <th className="p-3 text-xs font-sans text-center">Data</th>
          <th className="p-3 text-xs font-sans text-center">Dia da Semana</th>
          <th className="p-3 text-xs font-sans text-center">Tipo</th>
          <th className="p-3 text-xs font-sans text-center">Saldo Anterior</th>
          <th className="p-3 text-xs font-sans text-center">Valor</th>
          <th className="p-3 text-xs font-sans text-center"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="p-2 border-b-[1px] border-gray-200 h-9">
            <td className="text-xs text-center font-sans">{item.data}</td>
            <td className="text-xs text-center font-sans">{item.diaDaSemana}</td>
            <td className="text-xs text-center font-sans">{item.tipo}</td>
            <td className="text-xs text-center font-sans font-bold">{formateCurrency(item.saldoAnterior)}</td>
            <td className="text-xs text-center font-sans font-bold text-[#7b61ff]">{formateCurrency(item.valor)}</td>
            <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>

          </tr>
        ))}


      </tbody>
    </table>
  )
}