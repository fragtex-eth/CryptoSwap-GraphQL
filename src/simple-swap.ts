import { BigInt, Address } from "@graphprotocol/graph-ts";
import { Swap as SwapEvent } from "../generated/SimpleSwap/SimpleSwap";
import { Swap } from "../generated/schema";

export function handleSwap(event: SwapEvent): void {
  //Save in graph
  let swap = Swap.load(
    getIdFromEventParams(event.params._from, event.params._amountOut)
  );
  if (!swap) {
    swap = new Swap(
      getIdFromEventParams(event.params._from, event.params._amountOut)
    );
  }
  swap.buyer = event.params._from;
  swap.amountIn = event.params._amountIn;
  swap.amountOut = event.params._amountOut;
  swap.tokenIn = event.params._tokenIn;

  swap.save();
}

function getIdFromEventParams(buyer: Address, amountOut: BigInt): string {
  return buyer.toHexString() + amountOut.toHexString();
}
