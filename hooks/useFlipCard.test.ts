import { renderHook, act } from '@testing-library/react';
import { useFlipCard } from './useFlipCard';

describe('useFlipCard', () => {
  it('initializes with default state', () => {
    const { result } = renderHook(() => useFlipCard());
    expect(result.current.isFlipped).toBe(false);
  });

  it('initializes with custom state', () => {
    const { result } = renderHook(() => useFlipCard(true));
    expect(result.current.isFlipped).toBe(true);
  });

  it('flips the card', () => {
    const { result } = renderHook(() => useFlipCard());

    act(() => {
      result.current.flip();
    });

    expect(result.current.isFlipped).toBe(true);

    act(() => {
      result.current.flip();
    });

    expect(result.current.isFlipped).toBe(false);
  });

  it('resets the card', () => {
    const { result } = renderHook(() => useFlipCard(true));

    act(() => {
      result.current.reset();
    });

    expect(result.current.isFlipped).toBe(false);
  });
});
