import { InputHTMLAttributes } from 'react';
import { SavedSearch } from '@styled-icons/material-outlined/SavedSearch';

import * as S from './styles';

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBar({...props }: SearchBarProps) {
  return (
    <S.Wrapper>
      <SavedSearch size={18} />
      <S.Input {...props} type="search" />
    </S.Wrapper>
  );
}
