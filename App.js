import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [quilometragem, setQuilometragem] = useState('');
  const [litros, setLitros] = useState('');
  const [media, setMedia] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularMedia = () => {
    const mediaCalculada = quilometragem / litros;
    setMedia(mediaCalculada.toFixed(2));

    if (mediaCalculada >= 15) {
      setClassificacao('Ótimo');
    } else if (mediaCalculada >= 12) {
      setClassificacao('Bom');
    } else if (mediaCalculada >= 10) {
      setClassificacao('Regular');
    } else {
      setClassificacao('Ruim');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Quilometragem"
        keyboardType="numeric"
        onChangeText={setQuilometragem}
        value={quilometragem}
      />
      <TextInput
        placeholder="Litros"
        keyboardType="numeric"
        onChangeText={setLitros}
        value={litros}
      />
      <Button title="Calcular" onPress={calcularMedia} />
      {media > 0 && (
        <View>
          <Text>Média de consumo: {media} km/l</Text>
          <Text>Classificação: {classificacao}</Text>
        </View>
      )}
    </View>
  );
};

export default App;