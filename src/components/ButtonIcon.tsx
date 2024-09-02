import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons'; // Importe outras famílias de ícones conforme necessário

interface Props extends TouchableOpacityProps {
  iconName: string; // Nome do ícone
  iconFamily?: 'AntDesign' // Especifica a família de ícones
  iconSize?: number; // Tamanho opcional do ícone
  iconColor?: string; // Cor opcional do ícone
}

export function ButtonIcon({
  iconName,
  iconFamily = 'AntDesign', // Valor padrão
  iconSize = 24,
  iconColor = "#A3A3A3",
  ...rest
}: Props) {
  // Seleciona a família de ícones com base na prop `iconFamily`

  return (
    <TouchableOpacity className="p-2" {...rest}>
      <AntDesign name={iconName}  size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}