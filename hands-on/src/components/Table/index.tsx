import Image from "next/image"

import iconPencil from "@/assets/icon/pencil-svgrepo-com.svg"

export default function Table() {
  return (

    <table className="w-4/5 h-full" >
      <thead >
        <tr className="bg-[#fafafa] shadow-inner rounded-lg" >
          <th className="p-3 text-xs font-sans text-center">Data</th>
          <th className="p-3 text-xs font-sans text-center">Dia da Semana</th>
          <th className="p-3 text-xs font-sans text-center">Tipo</th>
          <th className="p-3 text-xs font-sans text-center">Saldo Anterior</th>
          <th className="p-3 text-xs font-sans text-center">Valor</th>
          <th className="p-3 text-xs font-sans text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>

        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>
        <tr className="mb-1 border-b-[1px] border-gray-200">
          <td className="text-xs text-center">Daniel</td>
          <td className="text-xs text-center">23</td>
          <td className="text-xs text-center">Desenvolvedor</td>
          <td className="text-xs text-center">R$: 120,00</td>
          <td className="text-xs text-center">R$: 325,00</td>
          <td><Image src={iconPencil} alt="icon pencil" width={20} height={20} /> </td>
        </tr>

      </tbody>
    </table>

  )
}