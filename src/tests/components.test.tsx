import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { ThemeToggle } from '../components/ThemeToggle';
import { DownloadButton } from '../components/DownloadButton';
import { EmptyState } from '../components/EmptyState';
import { siteConfig } from '../data/siteConfig';

describe('Header navigation', () => {
  it('renders every configured navigation link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    for (const item of siteConfig.nav) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0);
    }
  });

  it('has an accessible mobile menu toggle', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});

describe('ThemeToggle persistence', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('persists the chosen theme to localStorage and applies the dark class', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    await user.click(screen.getByRole('button', { name: /dark theme/i }));
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(screen.getByRole('button', { name: /light theme/i }));
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});

describe('DownloadButton missing-file handling', () => {
  it('disables the button and explains when the file is missing', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false } as Response));
    render(<DownloadButton path="documents/Lily-Morningstar-CV.pdf" label="Download PDF" />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /download pdf/i })).toBeDisabled();
    });
    expect(screen.getByText('Updated CV will be available soon.')).toBeInTheDocument();
    vi.unstubAllGlobals();
  });

  it('renders an enabled download link when the file exists', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true } as Response));
    render(<DownloadButton path="documents/Lily-Morningstar-CV.pdf" label="Download PDF" />);
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /download pdf/i })).toBeInTheDocument();
    });
    vi.unstubAllGlobals();
  });
});

describe('EmptyState', () => {
  it('renders title, message, and hints', () => {
    render(
      <EmptyState
        title="Nothing yet"
        message="Add items to the data file."
        hints={['Add publication']}
      />,
    );
    expect(screen.getByText('Nothing yet')).toBeInTheDocument();
    expect(screen.getByText('Add items to the data file.')).toBeInTheDocument();
    expect(screen.getByText('Add publication')).toBeInTheDocument();
  });
});
