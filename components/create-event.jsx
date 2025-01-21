"use client";
import React, { Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import EventForm from "./event-form";
const CreateEventDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const create = searchParams.get("create");
    if (create === "true") {
      setIsOpen(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    if (searchParams.get("create") === "true") {
      router.replace(`${getBasePath()}/${router.asPath}`);
    }
  };
  return (
    <Suspense>
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create New Event</DrawerTitle>
          </DrawerHeader>
          <EventForm
            onSubmitForm={() => {
              handleClose();
            }}
          />
          <DrawerFooter className="px-6">
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Suspense>
  );
};

export default CreateEventDrawer;
