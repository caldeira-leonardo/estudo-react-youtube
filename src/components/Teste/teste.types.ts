export type TesteProps = {
  children: React.ReactNode;
};
export type Teste2Props = {
  lala: string;
};

export type Teste3Props = {
  lele: string;
  lili: number;
};

//---------------------- bring types together
export type AllIn = TesteProps & Teste2Props & Teste3Props;

//---------------------- remove specifici type
export type AlmostAllIn = Omit<AllIn, 'lele'>;

//---------------------- select specific type
export type GetSomeProp = Pick<Teste3Props, 'lili'>;

export type WrongButtonProps = {
  //Both are the same (this is worst)
  name: string;
  color: string;
  type: string;
};

export type WritegButtonProps = Record<'name' | 'color' | 'type', string>; //Both are the same (this is better)

export type Day =
  | 'Domingo'
  | 'Segunda'
  | 'Terça'
  | 'Quarta'
  | 'Quinta'
  | 'Sexta'
  | 'Sabado';

export type EveryDayProp = Record<Day, 'prop'>; //easier way to make a prop with the same values

export type Qualquer = {
  vish: string;
} & Pick<EveryDayProp, 'Domingo'>;
