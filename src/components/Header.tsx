import { View, Text } from 'react-native';
import { ButtonIcon } from './ButtonIcon';

interface Props {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
}

export function Header({
  title,
  showBackButton = false,
  showShareButton = false
}: Props) {
  const EmptyBoxSpace = () => <View className="w-6 h-6" />;

  return (
    <View className="w-full h-32 bg-gray-800 flex justify-end pb-5 px-5">
      <View className="w-full flex-row justify-between items-center">
        {showBackButton ? (
          <ButtonIcon
            iconName="arrowleft" // Usando o ícone "arrowleft" da biblioteca AntDesign
            iconSize={24}
            iconColor="#A3A3A3"
          />
        ) : (
          <EmptyBoxSpace />
        )}

        <Text className="text-white text-center text-lg font-bold">
          {title}
        </Text>

        {showShareButton ? (
          <ButtonIcon
            iconName="sharealt" // Usando o ícone "sharealt" da biblioteca AntDesign
            iconSize={24}
            iconColor="#A3A3A3"
          />
        ) : (
          <EmptyBoxSpace />
        )}
      </View>
    </View>
  );
}