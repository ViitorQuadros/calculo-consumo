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

    if (mediaCalculada >= 12) {
      setClassificacao('Ótimo');
    } else if (mediaCalculada <= 10 && mediaCalculada >= 10) {
      setClassificacao('Bom');
    } else if (mediaCalculada <= 8) {
      setClassificacao('Regular');
    } else if(mediaCalculada <= 4){
      setClassificacao('ruim')
    }
     else {
      setClassificacao('Carro nem ligou');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <h1 style={{fontSize: 15}}>
        quilometragem: <TextInput
        
        keyboardType="numeric"
        onChangeText={setQuilometragem}
        value={quilometragem}
      />
      </h1>
      
      <h1 style={{fontSize: 15}}>
        Litros:
      <TextInput
        keyboardType="numeric"
        onChangeText={setLitros}
        value={litros}
      />
</h1>

      
      <Button title="Calcular" onPress={calcularMedia} />
      {media > 0 && (
        <View>
          <Text>O veiculo está fazendo: {media}  por km/l de combustivel</Text>
          <Text>A classificação dele é:  {classificacao}</Text>
        </View>
      )}
    </View>
  );
};

export default App;