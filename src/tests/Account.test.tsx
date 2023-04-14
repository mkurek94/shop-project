import { expect, it, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Account from "../pages/account/index";
import { AccountContext } from "@/providers/AccountProvider";
import { IAccount } from "@/types/acount";

const useRouter = vi.spyOn(require('next/router'), 'useRouter');

describe("Acount", () => {
  const mockPush = vi.fn();
  useRouter.mockImplementation(() => ({
    push: mockPush,
  }))

  it("should show account page if logged", async () => {
    const mockedValues = {
        loggedUser: {
          name: "Test user",
          address: {
            address: "test address",
            city: "Puck",
            country: "PL",
            postalCode: "84-100",
          },
          avatarUrl: "avatar.jpg",
          email: "test@test.pl",
          orders: [],
          password: "password",
          userId: "123",
        } as IAccount,
        isLogged: true,
        signIn: () => vi.fn(),
    };

    render(
      <AccountContext.Provider value={mockedValues}>
        <Account />
      </AccountContext.Provider>
    );

    const header = await screen.findByText("Welcome Test user")
    
    expect(header).toBeInTheDocument();
  });
});
