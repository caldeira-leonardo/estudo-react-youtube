import { useEffect, useMemo } from 'react';

import * as S from './styles';
import { AllIn, AlmostAllIn, GetSomeProp } from './teste.types';

const TesteComponent = () => {
  const lele: AllIn = useMemo(() => {
    return {
      children: <></>,
      lala: 'asd',
      lele: '',
      lili: 0
    };
  }, []);

  const pick: GetSomeProp = useMemo(() => {
    return {
      // Gets ONLY the property that was specified in the type
      lili: 10
    };
  }, []);

  const omit: AlmostAllIn = useMemo(() => {
    return {
      // Gets ALL properties except the one specified in the type
      children: 10,
      lala: '',
      lili: 12
    };
  }, []);

  exampleFunction({ name: 'Leonardo' });
  exampleFunction({ name: 'Leonardo', Age: 29 });
  exampleFunction({ name: 'Leonardo', Age: 29, adress: 'Presidente Prudente' });

  useEffect(() => {
    console.log('omit', omit); //TODO remove logs
    console.log('pick', pick); //TODO remove logs
    console.log('lele', lele); //TODO remove logs
  }, [omit, pick, lele]);

  return (
    <S.Container>
      <S.Content>Type</S.Content>
    </S.Container>
  );
};

export default TesteComponent;

function exampleFunction<T>(args: T): T {
  // This way, <T> is a generic typing, whatever is passed to it, it will accept.
  console.log('args', args); //TODO remove logs

  return args;
}
