import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Swap } from "../generated/SimpleSwap/SimpleSwap"

export function createSwapEvent(
  _from: Address,
  _tokenIn: Address,
  _amountIn: BigInt,
  _amountOut: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "_amountIn",
      ethereum.Value.fromUnsignedBigInt(_amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapEvent
}
