'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { Loader2, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function Chat() {
  const [query, setQuery] = useState('');
  const [generating, setGenerating] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [botMessage, setBotMessage] = useState('');

  const { user, isLoaded } = useUser();

  if (!isLoaded) return <h1 className="text-center text-3xl">Loading....</h1>;

  return (
    <section
      style={{
        minHeight: '93vh',
      }}
      className="flex flex-col justify-between"
    >
      <div className="flex flex-col w-full justify-between mx-auto max-h-[100vh-56px]">
        {!botMessage ? (
          <h1 className="text-3xl text-center">Type a message...</h1>
        ) : (
          <main
            className="flex-1 border-t"
            style={{
              maxHeight: '84vh',
              overflowY: 'scroll',
            }}
          >
            <div className="container px-4 py-6 mx-auto flex flex-col gap-4">
              <div className="space-y-1">
                {botMessage && (
                  <div className="flex items-center space-x-2">
                    <Image
                      alt="Avatar"
                      className="rounded-full h-10 w-10 bg-white"
                      height="40"
                      src={user?.imageUrl!}
                      style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                      }}
                      width="40"
                    />
                    <div className="bg-gray-100 rounded-xl p-4 dark:bg-gray-800">
                      <span className="font-bold underline">AI</span>
                      <p className="text-sm leading-snug">{botMessage}</p>
                    </div>
                  </div>
                )}
                {userMessage && (
                  <div className="flex items-center space-x-2 justify-end">
                    <div className="bg-gray-100 rounded-xl p-4 dark:bg-gray-800">
                      <span className="font-bold underline">
                        {user?.firstName}
                      </span>
                      <p className="text-sm leading-snug">{userMessage}</p>
                    </div>
                    <Image
                      alt="Avatar"
                      className="rounded-full h-10 w-10 bg-white"
                      height="40"
                      src={user?.imageUrl!}
                      style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                      }}
                      width="40"
                    />
                  </div>
                )}
              </div>
            </div>
          </main>
        )}
      </div>
      <div className="border-t">
        <div className="container px-4 py-4 mx-auto">
          <div
            className="grid items-center gap-1"
            style={{
              gridTemplateColumns: '1fr auto',
            }}
          >
            <Input
              disabled={generating}
              onChange={(e) => {
                setQuery(e.currentTarget.value);
              }}
              value={query}
              className="rounded-lg"
              placeholder="Type your message here."
            />
            <Button className="h-10 px-6 rounded-full">
              {generating ? <Loader2 className="animate-spin" /> : <Send />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
