import * as Dialog from "@radix-ui/react-dialog";
import RecipeList from "./crafting/RecipeList";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { LuX } from "react-icons/lu";
import * as Separator from "@radix-ui/react-separator";

export default function CraftingDialog({
  itemstack,
}: {
  itemstack: Itemstack;
}) {
  const { item } = itemstack;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <img
          src="src/assets/icons/screwdriver-icon.png"
          alt="open crafting menu"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75" />
        <Dialog.Content className="fixed left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform rounded-md border-2 border-black bg-white">
          <Dialog.Title className="p-2 text-center text-2xl font-bold">
            {item.name}
          </Dialog.Title>
          <Dialog.Description />
          <Dialog.Close>
            <AccessibleIcon.Root label="close">
              <LuX className="absolute right-1 top-1 size-6" />
            </AccessibleIcon.Root>
          </Dialog.Close>

          <div className="flex">
            {"dismantleRecipes" in item && (
              <RecipeList type="dismantle" item={item} />
            )}
            <Separator.Root orientation="vertical" />
            {"craftRecipes" in item && <RecipeList type="craft" item={item} />}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
